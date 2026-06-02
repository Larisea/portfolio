@echo off
echo === Local Build and Deploy ===

echo [1/4] Building Next.js locally...
call npm run build
if errorlevel 1 (
    echo Build failed!
    exit /b 1
)

echo [2/4] Building Docker image locally...
docker build -f Dockerfile.local -t portfolio .
if errorlevel 1 (
    echo Docker build failed!
    exit /b 1
)

echo [3/4] Saving Docker image...
docker save portfolio > portfolio.tar
if errorlevel 1 (
    echo Save failed!
    exit /b 1
)

echo [4/4] Uploading to server...
scp portfolio.tar root@43.167.159.73:/opt/resume/
scp docker-compose.yml root@43.167.159.73:/opt/resume/
scp nginx/default.conf root@43.167.159.73:/opt/resume/nginx/

echo.
echo === Upload complete! ===
echo Now SSH to server and run:
echo   ssh root@43.167.159.73
echo   cd /opt/resume
echo   docker load ^< portfolio.tar
echo   docker-compose up -d
echo.
echo Access at: http://43.167.159.73

del portfolio.tar
