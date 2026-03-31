$file = "src\app\shared\data\skills-enriched-data.ts"
$content = Get-Content $file -Raw -Encoding UTF8

# Fix all double-encoded UTF-8 characters
$content = $content -replace 'Ã©', 'é'
$content = $content -replace 'Ã¨', 'è'
$content = $content -replace 'Ã®', 'î'
$content = $content -replace 'Ã´', 'ô'
$content = $content -replace 'Ã§', 'ç'
$content = $content -replace 'Ã ', 'à'
$content = $content -replace 'Ã¢', 'â'
$content = $content -replace 'Ã»', 'û'
$content = $content -replace 'Ã¹', 'ù'
$content = $content -replace 'Ã«', 'ë'
$content = $content -replace 'Ã¯', 'ï'
$content = $content -replace 'Ãª', 'ê'
$content = $content -replace 'Ã‰', 'É'

Set-Content $file -Value $content -Encoding UTF8 -NoNewline

Write-Host "Fixed encoding in $file"
