import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Box,
  } from '@chakra-ui/react'

export const RecipeView = () => {
    return (
        <>
        <Flex bg="teal.500" top={0} >
          <Box mt={"5rem"} mx="auto" py="2rem">
            <Box w={"90vw"} bg="white" rounded="md" p={4} shadow="lg" >
            <TableContainer>
              <Table variant='simple'>
                <TableCaption>Recipe setting information</TableCaption>
                <Thead>
                  <Tr>
                    <Th>項目</Th>
                    <Th >現在設定</Th>
                    <Th isNumeric>単位</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>レシピタイトル</Td>
                    <Td >カスタムレシピ</Td>
                  </Tr>
                  <Tr>
                    <Td>豆品種・商品名</Td>
                    <Td >スタンダードブレンド</Td>
                  </Tr>
                  <Tr>
                    <Td>コーヒー粉・粉量</Td>
                    <Td >20</Td>
                    <Td isNumeric>(g)</Td>
                  </Tr>
                  <Tr>
                    <Td>お湯温度</Td>
                    <Td >95</Td>
                    <Td isNumeric>(℃)</Td>
                  </Tr>
                  <Tr>
                    <Td>蒸らし湯量</Td>
                    <Td >20</Td>
                    <Td isNumeric>(cc)</Td>
                  </Tr>
                  <Tr>
                    <Td>蒸らし時間</Td>
                    <Td >20</Td>
                    <Td isNumeric>(秒)</Td>
                  </Tr>
                  <Tr>
                    <Td>ドリップ湯量(1回目)</Td>
                    <Td >80</Td>
                    <Td isNumeric>(cc)</Td>
                  </Tr>
                  <Tr>
                    <Td>ドリップ湯量(2回目)</Td>
                    <Td >40</Td>
                    <Td isNumeric>(cc)</Td>
                  </Tr>
                  <Tr>
                    <Td>ドリップ湯量(3回目)</Td>
                    <Td >20</Td>
                    <Td isNumeric>(cc)</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                </Tfoot>
              </Table>
            </TableContainer>
            </Box>
          </Box>
        </Flex>
        </>
    )
}