import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    Button,
  } from '@chakra-ui/react'

export const RecipeChangeForm = () => {
    return (
        <Flex top={0} bg="teal.500" justifyContent="flex-end">
          <Box mt={"5rem"} mx="auto" py="2rem" >
            <Box w={"90vw"}  bg="white" rounded="md" p={20}  shadow="lg" >
              <FormControl>
                  <FormLabel>レシピ名</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>レシピ名を入力してください.</FormHelperText>
                  
                  <Box p="2" />
                  <FormLabel>豆品種・商品名</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>豆の品種や商品名を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>コーヒー粉・粉量</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>コーヒー粉の量を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>お湯温度</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>お湯の温度を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>蒸らし湯量</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>蒸らすお湯の量を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>蒸らし時間</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>蒸らすを入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>ドリップ湯量(1回目)</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>ドリップ湯量(1回目)を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>ドリップ湯量(2回目)</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>ドリップ湯量(2回目)を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>ドリップ湯量(3回目)</FormLabel>
                  <Input w={"50vw"} />
                  <FormHelperText>ドリップ湯量(3回目)を入力してください.</FormHelperText>
              </FormControl>

              <Button right={0} mt={20}>保存</Button>
            </Box>
          </Box>
        </Flex>
    )
}