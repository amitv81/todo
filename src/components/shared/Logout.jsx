import GoogleLogout from "react-google-login";

const clientId =
  "900579528323-mam6vmpqms78uujugfmfhqbuhrv0f5n6.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (res) => {
    console.log("Logout Success!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
