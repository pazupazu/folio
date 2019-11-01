export default function({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: "接続できません",
      statusCode: 403
    });
  }
}
