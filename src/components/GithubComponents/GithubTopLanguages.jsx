import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Heading,
  Spinner,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

const GitHubTopLanguages = () => {
  //   const [languages, setLanguages] = useState([]);
  //   const username = "Ak-nut-47";

  //   const getRandomColor = () => {
  //     const letters = "0123456789ABCDEF";
  //     let color = "#";
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   };

  //   useEffect(() => {
  //     const fetchTopLanguages = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://api.github.com/users/${username}/repos`
  //         );
  //         const repositories = response.data;
  //         const languageMap = {};
  //         let totalSize = 0;

  //         repositories.forEach((repo) => {
  //           if (repo.language) {
  //             languageMap[repo.language] =
  //               (languageMap[repo.language] || 0) + repo.size;
  //             totalSize += repo.size;
  //           }
  //         });

  //         const languagePercentage = Object.keys(languageMap).map((language) => ({
  //           language,
  //           percentage: ((languageMap[language] / totalSize) * 100).toFixed(2),
  //         }));

  //         // Sort the languages in descending order based on percentage
  //         languagePercentage.sort((a, b) => b.percentage - a.percentage);

  //         setLanguages(languagePercentage);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchTopLanguages();
  //   }, [username]);

  //   if (languages.length === 0) {
  //     return <Spinner size="lg" />;
  //   }

  return (
    <Flex display={"column"}>
      <img
        id="github-streak-stats"
        src="https://github-readme-streak-stats.herokuapp.com?user=ak-nut-47&theme=ambient-gradient&hide_border=true&date_format=M%20j%5B%2C%20Y%5D"
        alt="GitHub Streak Stats"
        maxW="100%"
        maxH="100%"
      />
      <img
        id="github-top-langs"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ak-nut-47"
        alt="Github Top Language"
      />
      <img
        id="github-stats-card"
        src="https://github-readme-stats.vercel.app/api?username=ak-nut-47"
        alt="Github Stats Card"
      />
    </Flex>
  );
};

export default GitHubTopLanguages;
