import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Square from './Square'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  status: {
    marginBottom: 10
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  }
})

function Board() {
  const status = 'Next player: X'

  const initialSquares: Array<string | null> = Array(9).fill(null)
  const [squares, setSquares] = React.useState(initialSquares)

  const handlePress = (i: number) => {
    const newSquares = squares.slice()
    newSquares[i] = 'X'
    setSquares(newSquares)
  }

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onPress={() => handlePress(i)} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.rowContainer}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.rowContainer}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.rowContainer}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  )
}

export default Board