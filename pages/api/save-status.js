import auth0 from '../../lib/auth0';
import { setStatus } from '../../model/markers';

const saveStatus = async (req, res) => {
  const session = await auth0.getSession(req);
  if (session) {
    const dados = req.body;
    await setStatus(session.user.sub, dados);
  }
  res.send({ ok: true });
};

export default saveStatus;
