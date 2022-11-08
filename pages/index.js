import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>家里有男人</title>
      </Head>
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "90%" }}>
          <h1 style={{ textAlign: "center", marginBottom: "50px" }}>家里有男人</h1>
          <Button variant="contained" sx={{ width: 1, mb: 3 }} size="large" startIcon={<PlayCircleIcon />} onClick={() => {
            new Audio("/one.m4a").play();
          }}>“谁啊，干嘛的？”</Button>
          <Button variant="contained" color="error" sx={{ width: 1, mb: 3 }} size="large" startIcon={<PlayCircleIcon />} onClick={() => {
            new Audio("/2.m4a").play();
          }}>“诶干啥的，有毛病吗”</Button>
          <Button variant="contained" color="warning" sx={{ width: 1, mb: 3 }} size="large" startIcon={<PlayCircleIcon />} onClick={() => {
            new Audio("/3.m4a").play();
          }}>“你放门口吧，我一会来拿”</Button>
          <Button variant="contained" color="secondary" sx={{ width: 1, mb: 3 }} size="large" startIcon={<PlayCircleIcon />} onClick={() => {
            new Audio("/4.m4a").play();
          }}>“等一下啊，等一下”</Button>
        </div>
      </div >
    </>

  )
}
