<#
.SYNOPSIS
    WandaHost Application Runner
.DESCRIPTION
    Runs, builds, tests, or lints the WandaHost Next.js application on Windows PowerShell.
.PARAMETER Command
    The command to execute: 'dev' (default), 'build', 'start', 'test', or 'lint'.
.PARAMETER Port
    The local port for dev or start server (default: 3000).
.PARAMETER Install
    Force reinstallation of npm dependencies before running.
.PARAMETER Clean
    Clean build artifacts (.next) before running.
.EXAMPLE
    .\run.ps1
    Runs the dev server on port 3000.
.EXAMPLE
    .\run.ps1 -Command test
    Runs all Vitest unit tests.
.EXAMPLE
    .\run.ps1 -Command build
    Creates an optimized production build.
.EXAMPLE
    .\run.ps1 -Port 3001
    Starts the dev server on port 3001.
#>

[CmdletBinding()]
param (
    [ValidateSet("dev", "build", "start", "test", "lint")]
    [string]$Command = "dev",

    [int]$Port = 3000,

    [switch]$Install,

    [switch]$Clean
)

$ErrorActionPreference = "Stop"

# Set working directory to project root
$ProjectRoot = $PSScriptRoot
if (-not $ProjectRoot) {
    $ProjectRoot = (Get-Location).Path
}
Set-Location -Path $ProjectRoot

function Write-Header {
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host "            WandaHost Web Platform Runner                 " -ForegroundColor White
    Write-Host "   Hosting, Cloud, Managed Infrastructure & AI Services   " -ForegroundColor DarkGray
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host ""
}

Write-Header

# 1. Check Node.js and npm
try {
    $nodeVersion = (node --version).Trim()
    $npmVersion = (npm --version).Trim()
    Write-Host "[OK] Node.js: $nodeVersion" -ForegroundColor Green
    Write-Host "[OK] npm:     $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Node.js or npm is not installed or not in your PATH." -ForegroundColor Red
    Write-Host "        Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# 2. Check & setup .env.local
$envFile = Join-Path $ProjectRoot ".env.local"
$envExample = Join-Path $ProjectRoot ".env.example"

if (-not (Test-Path $envFile)) {
    if (Test-Path $envExample) {
        Copy-Item -Path $envExample -Destination $envFile
        Write-Host "[OK] Created .env.local from .env.example" -ForegroundColor Green
    } else {
        Write-Host "[WARN] .env.example not found; skipping environment file creation." -ForegroundColor Yellow
    }
} else {
    Write-Host "[INFO] .env.local detected" -ForegroundColor Gray
}

# 3. Clean if requested
if ($Clean) {
    $nextDir = Join-Path $ProjectRoot ".next"
    if (Test-Path $nextDir) {
        Write-Host "[*] Removing .next directory..." -ForegroundColor Yellow
        Remove-Item -Path $nextDir -Recurse -Force
        Write-Host "[OK] Build cache cleaned." -ForegroundColor Green
    }
}

# 4. Check dependencies / Install
$nodeModules = Join-Path $ProjectRoot "node_modules"
if ($Install -or (-not (Test-Path $nodeModules))) {
    Write-Host "[*] Installing project dependencies with npm install..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] npm install failed." -ForegroundColor Red
        exit $LASTEXITCODE
    }
    Write-Host "[OK] Dependencies installed successfully." -ForegroundColor Green
} else {
    Write-Host "[INFO] node_modules detected" -ForegroundColor Gray
}

# 5. Execute Command
Write-Host ""
if ($Command -eq "dev") {
    # Check if port is in use and terminate stale listener
    $listeners = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if ($listeners) {
        foreach ($conn in $listeners) {
            $pidToStop = $conn.OwningProcess
            if ($pidToStop -and $pidToStop -ne $PID) {
                Write-Host "[*] Port $Port is occupied by PID $pidToStop. Stopping stale process to free port..." -ForegroundColor Yellow
                Stop-Process -Id $pidToStop -Force -ErrorAction SilentlyContinue
            }
        }
        Start-Sleep -Seconds 1
    }

    Write-Host ">>> Starting WandaHost Development Server on http://localhost:$Port ..." -ForegroundColor Cyan
    Write-Host ">>> Press Ctrl+C to stop the server." -ForegroundColor DarkGray
    Write-Host ""
    npx next dev -p $Port
}
elseif ($Command -eq "build") {
    Write-Host ">>> Building WandaHost for production..." -ForegroundColor Cyan
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] Production build completed successfully." -ForegroundColor Green
    }
}
elseif ($Command -eq "start") {
    # Check if port is in use and terminate stale listener
    $listeners = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if ($listeners) {
        foreach ($conn in $listeners) {
            $pidToStop = $conn.OwningProcess
            if ($pidToStop -and $pidToStop -ne $PID) {
                Write-Host "[*] Port $Port is occupied by PID $pidToStop. Stopping stale process to free port..." -ForegroundColor Yellow
                Stop-Process -Id $pidToStop -Force -ErrorAction SilentlyContinue
            }
        }
        Start-Sleep -Seconds 1
    }

    $nextDir = Join-Path $ProjectRoot ".next"
    if (-not (Test-Path $nextDir)) {
        Write-Host "[*] No production build detected. Building first..." -ForegroundColor Yellow
        npm run build
    }
    Write-Host ">>> Starting WandaHost Production Server on http://localhost:$Port ..." -ForegroundColor Cyan
    npx next start -p $Port
}
elseif ($Command -eq "test") {
    Write-Host ">>> Running test suite (Vitest)..." -ForegroundColor Cyan
    npm test
}
elseif ($Command -eq "lint") {
    Write-Host ">>> Checking code quality with ESLint..." -ForegroundColor Cyan
    npm run lint
}
