import { NextApiHandler } from "next";
import colors from '../../data/colors.json'

const color = (req, res) => {
  const { color } = req.query
  const colorData = colors.find(col => col.name === color)

  if (colorData) {
    res.status(200).json(colorData)
  } else {
    res.status(404).end()
  }
}

export default color
