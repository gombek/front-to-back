
Write-Host "MongoDB Start"

Write-Host "First Check ExecutionPolicy"
Get-ExecutionPolicy -List

# If script cannot be run set ExecutionPolicy
# Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

mongod.exe --auth --dbpath="./db" --logpath="./log/mongod.log"
mongod.exe --dbpath="./db" --logpath="./log/mongod.log"
