import { useState } from "react";
import {
  Center,
  Heading,
  Box,
  Image,
  Text,
  Badge,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../utils/data";

const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Functie om te filteren op naam en gezondheidslabels
  const filteredRecipes = data.hits.filter((item) => {
    const recipe = item.recipe;
    const nameMatch = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const healthLabelsMatch = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return nameMatch || healthLabelsMatch;
  });

  return (
    <Center flexDir="column" p={4}>
      <Heading mb={4}>Recipe Checker</Heading>

      {/* Zoekbalk */}
      <Input
        placeholder="Zoek op naam of gezondheidslabel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
        width="400px"
      />

      {/* Grid voor recepten */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {filteredRecipes.map((item) => {
          const recipe = item.recipe;

          return (
            <Box
              key={recipe.label}
              onClick={() => onSelectRecipe(recipe)}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              textAlign="center"
              cursor="pointer"
              boxShadow="md"
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                {recipe.label}
              </Text>

              <Image
                src={recipe.image}
                alt={recipe.label}
                boxSize="200px"
                objectFit="cover"
                mb={2}
                borderRadius="md"
              />

              {recipe.dietLabels.length > 0 && (
                <Text fontSize="sm" color="gray.500">
                  Dieet: {recipe.dietLabels.join(", ")}
                </Text>
              )}

              {recipe.cautions.length > 0 && (
                <Text fontSize="sm" color="red.500">
                  Waarschuwingen: {recipe.cautions.join(", ")}
                </Text>
              )}

              <Text fontSize="sm" color="gray.500" mt={2}>
                Maaltijdtype:{" "}
                {recipe.mealType
                  ? recipe.mealType.join(", ")
                  : "Niet gespecificeerd"}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Schoteltype:{" "}
                {recipe.dishType
                  ? recipe.dishType.join(", ")
                  : "Niet gespecificeerd"}
              </Text>

              <Box mt={2}>
                {recipe.healthLabels.includes("Vegan") && (
                  <Badge colorScheme="green" mr={1}>
                    Vegan
                  </Badge>
                )}
                {recipe.healthLabels.includes("Vegetarian") && (
                  <Badge colorScheme="blue" mr={1}>
                    Vegetarisch
                  </Badge>
                )}
                {recipe.healthLabels.includes("Pescatarian") && (
                  <Badge colorScheme="purple" mr={1}>
                    Pescatarian
                  </Badge>
                )}
                {recipe.healthLabels.includes("Gluten-Free") && (
                  <Badge colorScheme="yellow" mr={1}>
                    Gluten-Free
                  </Badge>
                )}
                {recipe.healthLabels.includes("Sesame-Free") && (
                  <Badge colorScheme="orange" mr={1}>
                    Sesame-Free
                  </Badge>
                )}
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};

export default RecipeListPage;
