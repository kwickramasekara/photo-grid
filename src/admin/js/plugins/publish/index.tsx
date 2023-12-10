import { definePlugin } from "sanity";
import { route } from "sanity/router";
import { LaunchIcon, PublishIcon, ErrorOutlineIcon } from "@sanity/icons";
import {
  Badge,
  Box,
  Button,
  Card,
  Code,
  Container,
  Flex,
  Grid,
  Inline,
  Stack,
  studioTheme,
  Text,
  ThemeProvider,
  ToastProvider,
  useToast,
} from "@sanity/ui";
import { app } from "../../../../../photo-grid.json";

const ui = function () {
  const webhookUrl = import.meta.env.SANITY_STUDIO_HOST_WEBHOOK_URL;
  const webhookMethod =
    import.meta.env.SANITY_STUDIO_HOST_WEBHOOK_METHOD || "POST";
  const toast = useToast();

  const triggerWebhook = async () => {
    // TODO: Check for errors and toast errors
    fetch(webhookUrl, { method: webhookMethod });

    toast.push({
      status: "success",
      title: "Triggered Webhook",
      description: "Please allow a few minutes for the build and deployment.",
    });
  };

  const renderNoWebhook = () => {
    return (
      <Container width={1}>
        <Card
          padding={[3, 4, 5]}
          paddingBottom={[4, 5, 6]}
          marginX={4}
          marginY={6}
          radius={1}
          shadow={2}
          tone="caution"
          style={{ textAlign: "center" }}
        >
          <Box
            marginBottom={2}
            style={{ fontSize: 32, color: "var(--card-muted-fg-color)" }}
          >
            {(ErrorOutlineIcon as any).render()}
          </Box>
          <Text size={2} muted>
            Oops! We couldn't find a valid webhook URL. Please see{" "}
            <a
              href="https://github.com/kwickramasekara/photo-grid/wiki/Configuring#environment-variables"
              target="_blank"
            >
              documentation
            </a>
            .
          </Text>
        </Card>
      </Container>
    );
  };

  const render = () => {
    return (
      <ThemeProvider theme={studioTheme}>
        <ToastProvider>
          <Container display="grid" width={6}>
            <Card shadow={2} radius={1} padding={4} marginX={4} marginY={6}>
              <Grid columns={[1, 1, 8, 12]} gap={4}>
                <Box
                  column={[1, 1, 6, 10]}
                  overflow="hidden"
                  style={{ paddingBottom: 10 }}
                >
                  <Stack space={3}>
                    <Inline space={2}>
                      <Text weight="bold" size={3}>
                        {new URL(app.domain).host}
                      </Text>
                      <a
                        href={`${app.domain}/${app.basePathName}`}
                        target="_blank"
                      >
                        <Button
                          mode="ghost"
                          tone="primary"
                          fontSize={1}
                          text="Open"
                          padding={2}
                          iconRight={LaunchIcon}
                          space={2}
                        ></Button>
                      </a>
                    </Inline>

                    <Inline space={2} style={{ display: "flex" }}>
                      <Text size={1} weight="semibold">
                        Webhook:
                      </Text>
                      <Badge
                        fontSize={1}
                        mode="outline"
                        style={{ marginTop: -3 }}
                      >
                        {webhookMethod}
                      </Badge>
                      <Code size={1} muted>
                        {webhookUrl ? webhookUrl : "N/A"}
                      </Code>
                    </Inline>
                  </Stack>
                </Box>
                <Box column={[1, 1, 2, 2]} style={{ paddingBottom: 10 }}>
                  <Flex
                    direction="column"
                    style={{ height: "100%" }}
                    align={["stretch", "stretch", "flex-end", "flex-end"]}
                    justify="flex-end"
                  >
                    <Button
                      fontSize={5}
                      text="Publish"
                      mode="default"
                      tone="primary"
                      paddingX={4}
                      onClick={() => triggerWebhook()}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Card>
          </Container>
        </ToastProvider>
      </ThemeProvider>
    );
  };

  return render();
};

export const deploy = definePlugin(() => {
  return {
    name: "sanity-plugin-photo-grid-publish",
    tools: [
      {
        name: "publish",
        title: "Publish",
        icon: PublishIcon,
        component: ui,
        router: route.create("/*"),
      },
    ],
  };
});
