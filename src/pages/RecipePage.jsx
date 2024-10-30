import { Box, Image, Text, Badge, VStack, Heading } from "@chakra-ui/react";

const RecipePage = ({ recipe, onBack }) => {
  if (!recipe) return null; // Zorg ervoor dat de component alleen rendert met een geldig recept

  return (
    <Box p={6} maxW="800px" mx="auto">
      {/* Terugknop */}
      <Text cursor="pointer" color="blue.500" onClick={onBack} mb={4}>
        &larr; Terug naar receptenlijst
      </Text>

      {/* Naam van het recept */}
      <Heading as="h2" size="lg" mb={4}>
        {recipe.label}
      </Heading>

      {/* Afbeelding van het recept */}
      <Image src={recipe.image} alt={recipe.label} borderRadius="md" mb={4} />

      {/* Maaltijdtype en schoteltype */}
      <VStack align="start" spacing={1} mb={4}>
        <Text>
          <strong>Maaltijdtype:</strong>{" "}
          {recipe.mealType ? recipe.mealType.join(", ") : "Niet gespecificeerd"}
        </Text>
        <Text>
          <strong>Schoteltype:</strong>{" "}
          {recipe.dishType ? recipe.dishType.join(", ") : "Niet gespecificeerd"}
        </Text>
      </VStack>

      {/* Totale kooktijd */}
      <Text mb={4}>
        <strong>Totale kooktijd:</strong>{" "}
        {recipe.totalTime
          ? `${recipe.totalTime} minuten`
          : "Niet gespecificeerd"}
      </Text>

      {/* Dieetlabel */}
      {recipe.dietLabels.length > 0 && (
        <Text mb={4}>
          <strong>Dieet:</strong> {recipe.dietLabels.join(", ")}
        </Text>
      )}

      {/* Gezondheidslabels */}
      <Box mb={4}>
        <Text>
          <strong>Gezondheidslabels:</strong>
        </Text>
        {recipe.healthLabels.map((label, index) => (
          <Badge key={index} colorScheme="green" mr={1} mt={1}>
            {label}
          </Badge>
        ))}
      </Box>

      {/* Waarschuwingen */}
      {recipe.cautions.length > 0 && (
        <Box mb={4}>
          <Text color="red.500">
            <strong>Waarschuwingen:</strong> {recipe.cautions.join(", ")}
          </Text>
        </Box>
      )}

      {/* Ingrediënten */}
      <Box mb={4}>
        <Text>
          <strong>Ingrediënten:</strong>
        </Text>
        <ul>
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Box>

      {/* Aantal porties */}
      <Text mb={4}>
        <strong>Porties:</strong> {recipe.yield || "Niet gespecificeerd"}
      </Text>

      {/* Totale voedingsstoffen */}
      <Box mb={4}>
        <Text>
          <strong>Voedingsinformatie per portie:</strong>
        </Text>
        <Text>
          Energy: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal
        </Text>
        <Text>
          Proteïne: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
        </Text>
        <Text>Vet: {Math.round(recipe.totalNutrients.FAT.quantity)} g</Text>
        <Text>
          Koolhydraten: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
        </Text>
        <Text>
          Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
        </Text>
        <Text>Natrium: {Math.round(recipe.totalNutrients.NA.quantity)} mg</Text>
      </Box>
    </Box>
  );
};

export default RecipePage;
