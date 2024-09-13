import FingerprintIcon from '@mui/icons-material/Fingerprint'
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { PasskeyArgType } from '@safe-global/protocol-kit'
import { useState } from 'react'
import { loadPasskeysFromLocalStorage } from '../lib/passkeys'

type props = {
  handleCreatePasskey: () => object
  handleSelectPasskey: (passkey: PasskeyArgType) => object
}

function LoginWithPasskey({ handleCreatePasskey, handleSelectPasskey }: props) {
  const [passkeys, setPasskeys] = useState<PasskeyArgType[]>([])
  console.log(passkeys)
  return (
    <Paper sx={{ margin: '32px auto 0' }}>
      <Stack padding={4}>
        <Typography textAlign={'center'} variant='h1' color={'primary'}>
          Smart Wallets via Passkeys
        </Typography>

        <Typography
          textAlign={'center'}
          marginBottom={8}
          marginTop={8}
          variant='h4'
        >
          Create a new smart wallet using passkeys
        </Typography>

        <Button
          onClick={handleCreatePasskey}
          startIcon={<FingerprintIcon />}
          variant='outlined'
          sx={{ marginBottom: '24px' }}
        >
          Create a new passkey
        </Button>

        <Divider sx={{ marginTop: '32px' }}>
          <Typography variant='caption' color='GrayText'>
            OR
          </Typography>
        </Divider>

        <Typography
          textAlign={'center'}
          marginBottom={8}
          marginTop={8}
          variant='h4'
        >
          Connect existing smart wallet using an existing passkey
        </Typography>

        <Button
          startIcon={<FingerprintIcon />}
          variant='contained'
          onClick={async () => {
            const passkeys = loadPasskeysFromLocalStorage()
            setPasskeys(passkeys)
            handleSelectPasskey(passkeys[0])
          }}
        >
          Use an existing passkey
        </Button>
      </Stack>
    </Paper>
  )
}

export default LoginWithPasskey
