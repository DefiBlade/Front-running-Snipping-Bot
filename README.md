# Snipping & Front Run bot

BSCTokenSniper is a bot written in Python or Javascript to detect new PairCreated events in the Binance Smart Chain (when a liquidity pair has been created) and buy the token. It is quite reliable and works well.

Front-running bot is a bot which it can do type of market manipulation where an entity can enter into a transaction in advance of a pending or incoming order that will or may impact the price of the order.

## IMPORTANT NOTES BEFORE RUNNING THE BOT !!!

1) The bot uses a wallet address and private key
    - if this is **NOT** configured correctly you will get an error that says "(node:45320) UnhandledPromiseRejectionWarning: Error: insufficient funds for intrinsic transaction cost"

2) Make **sure** you have the following assets in your MetaMask wallet **FOR THE ACCOUNT ADDRESS WITH WHICH YOU ARE USING THE BOT**
    - **BNB** (this is needed for gas)
    - **WBNB** (this is used to purchase the desired token)
    - **Approve WBNB on the Pancakeswap before running the bot** 
    
# BOT SETUP & CONFIGURATION INSTRUCTIONS
1) Download & Install Node.js and git bash 
- https://nodejs.org/en/ 
- https://git-scm.com/downloads


2) Extract the bot zip / download contents to a folder, example 
C:\users\username\Downloads\BHG--snipping-bot

3) open the command prompt (or git bash) to install the necessary modules for the bot (it should be in the same directory it was earlier when you copy the bot)
```
$ npm install -g yarn

$ yarn install
```

4) After installing modules, type 'npm start' and hit ENTER to run the bot.

```
$ npm start

```
# Usage

1) Snipping

1. You have to input the information to run the snipping.

```
- wallet address, 
- private key, 
- token address you want to snipe (e.g: 0xe9e7cea3dedca5984780bafc599bd69add087d56),
- Node wss url (wss://dawn-shy-voice.bsc.quiknode.pro/f929e892df..., ws://localhost:8546 in the case of full node)
- BNB amount to buy tokens
- Slippage (10 ~ 100 %)
- GAS (10 ~ 50 GWEI)
- GASLimit (160000 ~ 400000)

 ```

2. if you complete the setting of snipping,  you can click the "Start snipping" to run the snipping bot 

2) Front running

1. You have to input the information to run the front running.

```
- Min BNB to follow : Minimum bnb amount of transactions you want to front-run. (E.g. 2 BNB : front-run more than 2 BNB transactions)

- Token Memory

Please add tokens you want to front run on the Token Memory

 ```

2. if you complete the setting of Front running,  you can click the "Start FrontRun" to run the Front running bot 

*** setting ***

Reset or clear the bot's data if you want.


# Test

1) IF you want to TEST the bot using BNB / BUSD, then ADD the BUSD custom token to your MetaMask (0xe9e7cea3dedca5984780bafc599bd69add087d56)

2) Run the bot using the to_Purchase value of the BUSD token contract. This works because liquidity is frequently added to this pool.
