# website - The new website for Satakunta Nation

## Design & prototyping

See the [Figma project](https://www.figma.com/file/QPVg6H8mrDNMfxOoF8CckZ/SatO-Home-Page?node-id=0%3A1)

See the [Miro board](https://miro.com/app/board/uXjVPSkJ34k=/?share_link_id=176555736587)

See the [Trello board](https://trello.com/b/foD9vvFs/simple-project-board)

## Setup

### Google Calendar

In our use case we have a private calendar, that we want to embed on our website without allowing other access to it. The setup is as follows:

1. In the development environment, authorize Google API calls using your own credentials with

```gcloud auth application-default login
    --scopes=https://www.googleapis.com/auth/calendar.readonly,https://www.googleapis.com/auth/cloud-platform.read-only
    --impersonate-service-account=homepage-calendar@satakuntatalo-services.iam.gserviceaccount.com
```

## License

This project contains both code and content. The code of the website is licensed under GPLv3. By content we mean text, image, logos or designs specific to the Satakunta Nation. The content is proprietary. In other words, you can freely use the technical implementation (code, config files) of this website for your purposes, but make your own content.
