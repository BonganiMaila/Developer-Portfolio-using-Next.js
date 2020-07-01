/*With Next.js you don’t have to write all your routes from scratch. 
Next.js does file-system routing. It will serve each file in a directory called ‘pages’ 
under a pathname matching the filename. For example, ‘/pages/about.js’ is served at http://your_sites_name.com/about.
 */
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <h1>Wow! I like how easy this file based routing is!</h1>
  </Layout>
)