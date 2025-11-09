# PowerShell script to copy images from Linear HTML files folder to linearapp/public/images

# Find the source folder dynamically
$parentDir = Split-Path -Parent $PSScriptRoot
$sourceFolder = Get-ChildItem -Path $parentDir -Filter "*products_files" -Directory | Select-Object -First 1

if ($null -eq $sourceFolder) {
    Write-Host "Error: Could not find Linear products_files folder in parent directory"
    Write-Host "Please ensure the folder exists in: $parentDir"
    exit 1
}

$destFolder = Join-Path $PSScriptRoot "public\images"

# Create destination folder if it doesn't exist
if (-not (Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
    Write-Host "Created directory: $destFolder"
}

# Copy all JPG files
$jpgFiles = Get-ChildItem -Path $sourceFolder.FullName -Filter "*.jpg" -ErrorAction SilentlyContinue
if ($null -ne $jpgFiles) {
    $jpgFiles | Copy-Item -Destination $destFolder -Force
    Write-Host "Copied $($jpgFiles.Count) JPG files"
} else {
    Write-Host "No JPG files found"
}

# Copy all PNG files
$pngFiles = Get-ChildItem -Path $sourceFolder.FullName -Filter "*.png" -ErrorAction SilentlyContinue
if ($null -ne $pngFiles) {
    $pngFiles | Copy-Item -Destination $destFolder -Force
    Write-Host "Copied $($pngFiles.Count) PNG files"
} else {
    Write-Host "No PNG files found"
}

Write-Host "Image copy completed!"
