import { Recipe, setCustomRecipe } from '@/src/lib/firestore'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    Button,
    VStack,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useSignInState } from '@/src/contexts/signInStateProvider'

export const RecipeChangeForm = () => {
    
  const { user } = useSignInState()

    const post = () => {
      setCustomRecipe(recipe)
    }  
    const [recipe_title, setRecipe_title] = useState<string >("")
    const [bean_type, setBean_type] = useState<string | null>("")
    const [powder_weight, setPowder_weight] = useState<number | null>(0)
    const [water_temp, setWater_temp] = useState<number | null>(0)
    const [steam_weight, setSteam_weight] = useState<number | null>(0)
    const [steam_time, setSteam_time] = useState<number | null>(0)
    const [drip_dist, setDrip_dist] = useState<Array<number>>([0, 0, 0])
    const [recipe_coment, setRecipe_coment] = useState<string | null>("")

    const recipe : Recipe = (
      {
        bean_type,
        drip_dist,
        drip_times: 0,
        head_count: 0,
        powder_weight,
        recipe_ID: '',
        recipe_coment,
        recipe_title,
        setting_date: new Date(),
        user_ID: user?.uid,
        user_name: user?.displayName,
        water_temp,
        water_weight: 0,
        steam_time,
        steam_weight
      }
    )


    return (
        <Flex top={0} bg="teal.500" justifyContent="flex-end">
          <Box mt={"5rem"} mx="auto" py="2rem" >
            <Box w={"90vw"}  bg="white" rounded="md" p={20}  shadow="lg" >
              <VStack></VStack>
              <FormControl>
                  <FormLabel>レシピ名</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setRecipe_title(e.target.value)}/>
                  <FormHelperText>レシピ名を入力してください.</FormHelperText>
                  
                  <Box p="2" />
                  <FormLabel>豆品種・商品名</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setBean_type(e.target.value)}/>
                  <FormHelperText>豆の品種や商品名を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>コーヒー粉・粉量</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setPowder_weight(Number(e.target.value))}/>
                  <FormHelperText>コーヒー粉の量を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>お湯温度</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setWater_temp(Number(e.target.value))}/>
                  <FormHelperText>お湯の温度を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>蒸らし湯量</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setSteam_weight(Number(e.target.value))}/>
                  <FormHelperText>蒸らすお湯の量を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>蒸らし時間</FormLabel>
                    <Input w={"50vw"} onBlur={(e) => setSteam_time(Number(e.target.value))}/>
                  <FormHelperText>蒸らすを入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>ドリップ湯量(1回目)</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setDrip_dist(drip_dist.map((dist, index) => (index === 0 ? Number(e.target.value) : dist)))}/>
                  <FormHelperText>ドリップ湯量(1回目)を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>ドリップ湯量(2回目)</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setDrip_dist(drip_dist.map((dist, index) => (index === 1 ? Number(e.target.value) : dist)))}/>
                  <FormHelperText>ドリップ湯量(2回目)を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>ドリップ湯量(3回目)</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setDrip_dist(drip_dist.map((dist, index) => (index === 2 ? Number(e.target.value) : dist)))}/>
                  <FormHelperText>ドリップ湯量(3回目)を入力してください.</FormHelperText>

                  <Box p="2" />
                  <FormLabel>コメント</FormLabel>
                  <Input w={"50vw"} onBlur={(e) => setRecipe_coment(e.target.value)}/>
                  <FormHelperText>コメントを入力してください.</FormHelperText>
              </FormControl>

              <Button right={0} mt={10} onClick= { () => post() } >保存</Button>
            </Box>
          </Box>
        </Flex>
    )
}