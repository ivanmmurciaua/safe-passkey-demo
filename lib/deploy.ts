import { PasskeyArgType } from '@safe-global/protocol-kit'
import { PaymasterOptions, Safe4337Pack } from '@safe-global/relay-kit'
import { formatEther, parseEther, zeroAddress } from 'viem'
import {
  BUNDLER_URL,
  PAYMASTER_URL,
  RPC_URL
} from './constants'

const paymasterOptions : PaymasterOptions = {
  isSponsored : true,
  paymasterUrl : PAYMASTER_URL
}

/**
 * Deploy the account sending 0 to Zero Address.
 * @param {PasskeyArgType} signer - Signer object with rawId and coordinates.
 * @param {string} safeAddress - Safe address.
 * @returns {Promise<void>}
 * @throws {Error} If the operation fails.
 */
export const deploy = async (passkey: PasskeyArgType) => {
  // 1) Initialize Safe4337Pack
  const safe4337Pack = await Safe4337Pack.init({
    provider: RPC_URL,
    signer: passkey,
    bundlerUrl: BUNDLER_URL,
    paymasterOptions,
    options: {
      owners: [],
      threshold: 1
    }
  })

  // 2) Create SafeOperation
  const rawTx = {
    to: zeroAddress,
    data: parseEther('0').toString(),
    value: '0'
  }

  const safeOperation = await safe4337Pack.createTransaction({
    transactions: [rawTx]
  })

  // 3) Sign SafeOperation
  const signedSafeOperation = await safe4337Pack.signSafeOperation(
    safeOperation
  )

  console.log('SafeOperation', signedSafeOperation)

  // 4) Execute SafeOperation
  const userOperationHash = await safe4337Pack.executeTransaction({
    executable: signedSafeOperation
  })

  return userOperationHash
}
