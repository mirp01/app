import { Slot, Stack } from "expo-router";
import { AuthProvider } from "./context/auth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Slot/>
      </Stack>
    </AuthProvider>
  );
}
