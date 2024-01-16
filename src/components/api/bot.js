import { errorMessage, createNotification, client } from "./api";

export async function startSnipping(node, wallet, key, token, amount, slippage, gasprice, gaslimit) {
    try {
      await client.post('bots/startSnipping', {
        node: node,
        wallet: wallet,
        key : key,
        token : token,
        amount: amount,
        slippage : slippage,
        gasprice : gasprice,
        gaslimit : gaslimit
      });
    } catch (err) {
      createNotification("error", errorMessage(err));
    }
 
}

export async function stopSnipping() {
    try {
      await client.post('bots/stopSnipping');
    } catch (err) {
      createNotification("error", errorMessage(err));
    }
}

export async function getSnippingStatus() {
  try {
    let res =  await client.get('bots/getSnippingStatus');
    let status = res.data.data[0];
    return status;
  } catch (err) {
    createNotification("error", errorMessage(err));
  }
}

export async function startFront(node, wallet, key, token, amount, slippage, gasprice, gaslimit, minbnb) {
  try {
    await client.post('bots/startFront', {
      node: node,
      wallet: wallet,
      key : key,
      token : token,
      amount: amount,
      slippage : slippage,
      gasprice : gasprice,
      gaslimit : gaslimit,
      minbnb : minbnb
    });
  } catch (err) {
    createNotification("error", errorMessage(err));
  }

}

export async function stopFront() {
  try {
    await client.post('bots/stopFront');
  } catch (err) {
    createNotification("error", errorMessage(err));
  }
}

export async function getFrontStatus() {
try {
  let res =  await client.get('bots/getFrontStatus');
  let status = res.data.data[0];
  return status;
} catch (err) {
  createNotification("error", errorMessage(err));
}
}