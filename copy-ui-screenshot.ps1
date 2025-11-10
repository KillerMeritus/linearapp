# PowerShell script to copy the large UI screenshot

$sourceFolder = Join-Path (Split-Path -Parent $PSScriptRoot) "Linear – Plan and build products_files"
$destFolder = Join-Path $PSScriptRoot "public\images"

# Find the largest image file (likely the UI screenshot)
$largeFiles = Get-ChildItem -Path $sourceFolder -File | Where-Object { $_.Length -gt 2000000 } | Sort-Object Length -Descending

if ($null -ne $largeFiles -and $largeFiles.Count -gt 0) {
    $uiScreenshot = $largeFiles[0]
    $destFile = Join-Path $destFolder "linear-ui-screenshot.jpg"
    Copy-Item $uiScreenshot.FullName -Destination $destFile -Force
    Write-Host "Copied UI screenshot: $($uiScreenshot.Name) -> linear-ui-screenshot.jpg"
    Write-Host "File size: $([math]::Round($uiScreenshot.Length / 1MB, 2)) MB"
} else {
    Write-Host "No large image files found. Trying alternative approach..."
    
    # Try to find files with specific patterns
    $altFiles = Get-ChildItem -Path $sourceFolder -Filter "*11*" -File
    if ($null -ne $altFiles -and $altFiles.Count -gt 0) {
        $uiScreenshot = $altFiles | Sort-Object Length -Descending | Select-Object -First 1
        $destFile = Join-Path $destFolder "linear-ui-screenshot.jpg"
        Copy-Item $uiScreenshot.FullName -Destination $destFile -Force
        Write-Host "Copied UI screenshot: $($uiScreenshot.Name) -> linear-ui-screenshot.jpg"
    } else {
        Write-Host "Could not find UI screenshot file"
    }
}

