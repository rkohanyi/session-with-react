export default function Nav() {

    return (
      <div style={{display: 'flex', flexDirection: 'row', padding: '12px'}}>
        <a style={{padding:'4px'}} href='/no-need-for-login'>Public page</a>
        <a style={{padding:'4px'}}  href='/login-needed'>Secret page</a>
      </div>
    )
}
