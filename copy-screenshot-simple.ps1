$source = Get-ChildItem "..\Linear – Plan and build products_files" | Where-Object { $_.Length -gt 2000000 } | Sort-Object Length -Descending | Select-Object -First 1
if ($source) {
    Copy-Item $source.FullName -Destination "public\images\linear-ui-screenshot.jpg" -Force
    $sizeMB = [math]::Round($source.Length/1MB, 2)
    Write-Host "Copied: $($source.Name) ($sizeMB MB)"
}
