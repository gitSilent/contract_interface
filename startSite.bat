

start geth --datadir ./ --networkid 1547 --http.api "web3,eth,net,debug,personal" --http.corsdomain "*" --allow-insecure-unlock

start geth attach \\.\pipe\geth.ipc --exec miner.start()


