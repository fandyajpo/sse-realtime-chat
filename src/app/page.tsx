import { ChannelProvider } from "@/components/provider/channel";
import Screen from "@/components/layout/screen";
import { Compose } from "@/components/channel/compose";
import { Content } from "@/components/channel/content";
export default function Home() {
  return (
    <ChannelProvider>
      <Screen className="h-screen">
        <Content />
        <div id="new-message"></div>
        <Compose />
      </Screen>
    </ChannelProvider>
  );
}
