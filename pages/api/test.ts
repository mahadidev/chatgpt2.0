export default function now(req: any, res: any) {
  const date = new Date();
  const format = date.toUTCString();

  res.json({ now: format });
}
