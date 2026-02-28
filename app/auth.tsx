import { useState } from "react";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { useAuth } from "@/lib/auth-context";
import { Text, TextInput, Button, useTheme } from "react-native-paper";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [error,setError] = useState<string | null>("");
  const theme = useTheme();
  const {signIn,signUp} = useAuth();
  const router = useRouter();

  const handleAuth = async() => {
    if (!email || !password){
      setError("Please fill in all fields");
      return;
    }

    if (password.length<6){
      setError("Password must be atleast 6 charachters long");
      return;
    }

    setError(null);
    
    if (isSignUp){
      const error = await signUp(email,password);
      if (error){
        setError(error);
        return;
      }
    }else{
      const error = await signIn(email,password)
      if (error){
        setError(error);
        return;
      }
    }
    router.replace("/")

    }

    

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title} variant="headlineMedium">
          {" "}
          {isSignUp ? "Create Account" : "Welcome Back"}
        </Text>

        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          style={styles.input}
          onChangeText={setEmail}  
        />

        <TextInput
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          mode="outlined"
          style={styles.input}
          onChangeText={setPassword}
        />

        <Button style={styles.button} mode="contained" onPress={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        {error && (
          <Text style={{color: theme.colors.error}}>
            {error}
          </Text>
        )}
        <Button style={styles.switchModeButton} mode="text" onPress={handleSwitchMode}>
          {isSignUp
            ? "Already have an account?Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  switchModeButton: {
    marginTop: 16,
  }
});
