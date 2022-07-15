import React from "react";
import { AuthProvider } from "./src/utils/auth";


import Navigation from "./src/navigation";
import { SafeAreaView, View } from "react-native";



export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>

  );
}

