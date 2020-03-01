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

type Squares = {
  values: Array<'X' | '0' | null>,
  xIsNext: boolean
}

function Board() {
  const initialSquares: Squares = {
    values: Array(9).fill(null),
    xIsNext: true
  }
  const [squares, setSquares] = React.useState(initialSquares)

  const status = 'Next player: ' + (squares.xIsNext ? 'X' : '0')

  const handlePress = (i: number) => {
    const values = squares.values.slice()
    values[i] = squares.xIsNext ? 'X' : '0'
    setSquares({
      values: values,
      xIsNext: !squares.xIsNext
    })
  }

  const renderSquare = (i: number) => {
    return <Square value={squares.values[i]} onPress={() => handlePress(i)} />
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