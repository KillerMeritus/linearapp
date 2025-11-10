@echo off
cd /d "%~dp0"
cd ..
for %%F in ("Linear – Plan and build products_files\f=auto,dpr=2,q=95,fit=scale-down,metadata=none(11)") do (
    if exist "%%F" (
        copy "%%F" "linearapp\public\images\linear-ui-screenshot.jpg" /Y
        echo Screenshot copied successfully!
    ) else (
        echo File not found: %%F
    )
)

