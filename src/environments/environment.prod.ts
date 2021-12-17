import { commonEnv } from './environment.common';

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "production",
  featureVisible: true,
  application: true,
  theme: "default",
  rpcUrl: "https://rpc.energyweb.org/",
  chainId: 246,
  cacheServerUrl: "https://identitycache.energyweb.org/v1",
  natsServerUrl: "https://identityevents.energyweb.org/",
  kmsServerUrl: "https://kms.energyweb.org/connect/new",
  stakingPoolFactoryAddress: "0x3Bd4D48D022ACA4C3FC1Fe673CF4741D5888bcc7",
  checkStakingVerification: true,
  showAzureLoginOption: false,
  isWalletConnectEnabled: false,
  patronRole: "email.roles.verification.apps.energyweb.auth.ewc",
  claimManagerAddress: "0x23b026631A6f265d17CFee8aa6ced1B244f3920C",

  networkName: "EWC",
  currencyName: "EWT",
  currencySymbol: "EWT",
  blockExlorerUrl: "https://explorer.energyweb.org",
};

export const environment = { ...commonEnv, ...env };
