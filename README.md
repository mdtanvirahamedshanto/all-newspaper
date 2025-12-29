# All Newspaper

Bangladesh newspaper reader built with **Expo + React Native**.

- **Browse** newspapers by category
- **Search** and open sites inside the app (WebView)
- **Bookmark** newspapers (persistent)
- **Download Apk** [Download Link](https://expo.dev/artifacts/eas/n889eqvXZ4SwW7NjqvoKcM.apk)

## Tech stack

- Expo SDK 54
- React Native
- React Navigation (tabs + stack)
- WebView
- NativeWind (Tailwind for RN)
- AsyncStorage (bookmarks)

## Screens

- **Home**: Bangladesh newspaper list + search
- **Browser**: in-app web viewer + back/forward/reload + bookmark
- **Bookmarks**: saved list
- **Settings**: about

## Project structure

```
.
├─ App.tsx
├─ index.js
├─ app.json
├─ eas.json
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ navigation/
│  ├─ screens/
│  ├─ state/
│  └─ utils/
└─ assets/
```

## Requirements

- Node.js (LTS recommended)
- pnpm
- Expo Go (for device testing)

## Getting started

```bash
pnpm install
pnpm start
```

Then scan the QR code with **Expo Go** (Android/iOS).

### Run on Android / iOS

```bash
pnpm android
pnpm ios
```

### Lint / format

```bash
pnpm lint
pnpm format
```

## Build APK / AAB / iOS IPA (EAS)

This project uses **EAS Build**. See Expo docs:
- Build configuration: [docs.expo.dev](https://docs.expo.dev/build-reference/build-configuration/)
- Build a project: [docs.expo.dev](https://docs.expo.dev/deploy/build-project/)

### 1) Install EAS CLI

```bash
npm i -g eas-cli
```

### 2) Login and configure

```bash
eas login
eas build:configure
```

### 3) Android

- **APK (preview/testing)**:

```bash
eas build -p android --profile preview
```

- **AAB (Play Store production)**:

```bash
eas build -p android --profile production
```

### 4) iOS (App Store / TestFlight)

You need an Apple Developer account.

```bash
eas build -p ios --profile production
```

### Download builds

- From the build page, click **Artifacts** → **Download**.
- Or via CLI:

```bash
eas build:list -p android
eas build:download -p android --latest
```

## Open source

Contributions are welcome. Please read:
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`

## License

MIT — see `LICENSE`.


