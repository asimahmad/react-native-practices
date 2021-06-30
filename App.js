import React, {useState, useEffect} from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




// const App = () => {

//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState({});
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     async function getRepos() {
//       try {
//         const repoData = await fetch(
//           "https://api.github.com/repos/tannerlinsley/react-query"
//         ).then((res) => res.json());
//         setData(repoData);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getRepos();
//   }, []);
//   // if (loading) return "Loading...";

//   // if (error) return "An error has occurred: " + error.message;
 
//   return (
//       <View>
//         <Text style={{margin:'30%'}}>Hey there, I am Asim</Text>
//         <Text>{data.name}</Text>
//         <Text>{data.description}</Text>
//         <Text>👀 {data.subscribers_count}</Text>
//         <Text>✨ {data.stargazers_count}</Text>
//         <Text>🍴 {data.forks_count}</Text>
//       </View>
//   );
// };

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json(),
      console.log(res)
    )
  )

  return (
    <View>
            <Text style={{margin:'30%'}}>Hey there, I am Asim</Text>
            <Text>{data.name}</Text>
            <Text>{data.description}</Text>
            <Text>👀 {data.subscribers_count}</Text>
            <Text>✨ {data.stargazers_count}</Text>
            <Text>🍴 {data.forks_count}</Text>
          </View>
  )
}

export default App;
