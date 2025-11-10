$sourceDir = Join-Path (Split-Path -Parent $PSScriptRoot) "Linear – Plan and build products_files"
$sourceFile = Join-Path $sourceDir "f=auto,dpr=2,q=95,fit=scale-down,metadata=none(11)"
$destFile = Join-Path $PSScriptRoot "public\images\linear-ui-screenshot.jpg"

if (Test-Path $sourceFile) {
    Copy-Item $sourceFile -Destination $destFile -Force
    Write-Host "Successfully copied UI screenshot"
    Write-Host "Source: $sourceFile"
    Write-Host "Destination: $destFile"
} else {
    Write-Host "Source file not found: $sourceFile"
    Write-Host "Available files:"
    Get-ChildItem $sourceDir | Where-Object { $_.Length -gt 2000000 } | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length/1MB,2)}}
}

