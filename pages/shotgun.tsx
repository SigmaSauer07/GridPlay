"use client";

import { Box, Grid, GridItem, Text, Input, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { scoreState } from "../state/scoreState";
import { useState } from "react";

const ScoreGrid = () => {
  const [awayTeam, setAwayTeam] = useState("Away Team");
  const [homeTeam, setHomeTeam] = useState("Home Team");
  const [scores, setScores] = useRecoilState(scoreState);

  const updateScore = (row: number, col: number) => {
    const newScores = [...scores];
    const current = newScores[row][col];
    newScores[row][col] = current === "?" ? "0" : (parseInt(current) + 1).toString();
    setScores(newScores);
  };

  return (
    <VStack spacing={8} p={4}>
      {/* Header */}
      <Grid templateColumns="1fr auto 1fr" gap={4} alignItems="center">
        <Input
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
          variant="unstyled"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          color="orange.500"
        />
        <Text fontSize="2xl" fontWeight="bold">
          @
        </Text>
        <Input
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
          variant="unstyled"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          color="green.500"
        />
      </Grid>

      {/* Scoring Grid */}
      <VStack spacing={8}>
        {/* First Half */}
        <VStack>
          <Text fontWeight="bold">FIRST HALF</Text>
          <Grid templateColumns="repeat(10, 1fr)" gap={2}>
            {scores[0].map((score, idx) => (
              <GridItem
                key={`first-${idx}`}
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="red.100"
                border="1px solid"
                borderColor="red.400"
                borderRadius="md"
                cursor="pointer"
                onClick={() => updateScore(0, idx)}
              >
                <Text color="red.500" fontSize="lg" fontWeight="bold">
                  {score}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </VStack>

        {/* Final */}
        <VStack>
          <Text fontWeight="bold">FINAL</Text>
          <Grid templateColumns="repeat(10, 1fr)" gap={2}>
            {scores[1].map((score, idx) => (
              <GridItem
                key={`final-${idx}`}
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
                border="1px solid"
                borderColor="blue.400"
                borderRadius="md"
                cursor="pointer"
                onClick={() => updateScore(1, idx)}
              >
                <Text color="blue.500" fontSize="lg" fontWeight="bold">
                  {score}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ScoreGrid;
