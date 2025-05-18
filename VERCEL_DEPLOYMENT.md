# Vercel Deployment Guide

This project has been configured to deploy correctly on Vercel, handling the dependency conflicts between `react-day-picker` and `date-fns`.

## Configuration Files

The following configuration files have been added to ensure proper deployment:

1. **vercel.json** - Configures the build process to use `--legacy-peer-deps`
2. **.npmrc** - Sets the `legacy-peer-deps=true` flag for all npm operations
3. **.vercelignore** - Excludes unnecessary files from deployment

## Dependency Conflicts

This project has the following dependency conflicts:

- `react-day-picker@8.10.1` requires `date-fns` version `^2.28.0 || ^3.0.0`, but the project was using `date-fns@4.1.0`
- `react-day-picker@8.10.1` is not compatible with `react@19.1.0` (it only supports React up to version 18)

These conflicts have been resolved by:

1. Downgrading `date-fns` to version `^3.0.0`
2. Using the `--legacy-peer-deps` flag to ignore peer dependency conflicts with React 19

## Deployment Steps

1. Connect your GitHub repository to Vercel
2. During the import process, Vercel will automatically detect the Next.js framework
3. The custom build and install commands in `vercel.json` will be used
4. No additional environment variables are required for the dependency resolution

## Troubleshooting

If you encounter build errors related to dependencies:

1. Check the Vercel build logs for specific error messages
2. Ensure that the `.npmrc` file is being properly included in the deployment
3. You can manually override the install command in the Vercel project settings to include `--legacy-peer-deps`

## Local Development

For local development, always use:

```bash
npm install --legacy-peer-deps
npm run dev
```

This ensures consistency between your local environment and the Vercel deployment.
