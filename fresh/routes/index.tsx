export default function Home() {
  return (
    <div>
      <h1>Log in</h1>
      <form method="post">
        <input type="text" name="username" value=""/>
        <input type="password" name="password" value=""/>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}