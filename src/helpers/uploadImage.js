export default file => onSuccess => onError => {
  // this is where we'd put file uploading code (firebase in tutorial) (or aws s3)
  onSuccess(
    'https://i.insider.com/5f1b3c0c2618b94ae449d29c?width=1136&format=jpeg',
  );
};
