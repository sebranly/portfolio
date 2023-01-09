# Description

Live at https://sebranly.github.io/portfolio/

- [ ] On GitHub go to Settings > Pages and activate it for `master`
  - [ ] A GitHub Action should be queued for publishing the website live
- [ ] Go back to `main`
- [ ] Favicon: use a website like https://favicon.io/favicon-generator/ and edit `manifest.json` as needed
- [ ] Edit the metadata for social media sharing and other files
  - [ ] The project should not contain any of these strings anymore:
    - [ ] `placeholder`

## Development

### Setup

- Clone the repository with `git clone git@github.com:sebranly/portfolio.git`
- Go into the repository (e.g. with `cd`)
- Make sure you use correct node (`node -v`) and npm (`npm -v`) versions
- Run `npm ci` to install the dependencies

### Start

- To run it locally, run `npm run start`, it has hot reloading
- To run the test suite (no need to run command above), run `npm run test`

### Deploy

- Commit and push your changes to `main` branch, or create a merge request as a PR from your clone to this project's `main` branch
- Make sure to have followed the following. If not, create a new PR.
  - increase the `WEBSITE_VERSION` from `src/constants/general.ts` file, by following semver
    - MAJOR version when you make incompatible API changes,
    - MINOR version when you add functionality in a backwards compatible manner, and
    - PATCH version when you make backwards compatible bug fixes.
- Confirm that test suite passes with `npm run test`
- Then run `npm run deploy`
- Finally create a new release for this version on [GitHub Releases page](https://github.com/sebranly/portfolio/releases) by adding the changelog