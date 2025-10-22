import React from 'react'
import { View, Text } from 'react-native'
//
import { IMovieDetails } from '@/types/movie'
import { Calendar, Play, Share2, Star } from 'lucide-react-native'

const ProductionInfo = ({ movie }: { movie: IMovieDetails }) => {
  return (
    <View className="mt-8">
          <Text className="text-white text-lg font-semibold mb-3">
            Production Details
          </Text>

          <View className="w-full flex-row items-center space-x-2 mb-3">
            <Play color="gray" size={16} />

            <View className="flex-row items-center ml-2">
              <Text className="text-gray-300 text-sm"> Companies : </Text>
              <Text className="text-gray-400 text-sm">
                {movie.production_companies
                  ?.map((p) => p.name)
                  .filter(Boolean)
                  .join(", ") || "N/A"}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center mb-3">
            <Calendar color="gray" size={16} />

            <View className="flex-row items-center ml-2">
              <Text className="text-gray-300 text-sm"> Countries : </Text>
              <Text className="text-gray-400 text-sm">
                {movie.production_countries
                  ?.map((c) => c.name)
                  .filter(Boolean)
                  .join(", ") || "N/A"}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center mb-3">
            <Star color="gray" size={16} />

            <View className="flex-row items-center ml-2">
              <Text className="text-gray-300 text-sm"> Budget : </Text>
              <Text className="text-gray-400">
                {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center mb-3">
            <Share2 color="gray" size={16} />

            <View className="flex-row items-center ml-2">
              <Text className="text-gray-300 text-sm"> Revenue : </Text>
              <Text className="text-gray-400">
                {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
              </Text>
            </View>
          </View>
        </View>
  )
}

export default ProductionInfo