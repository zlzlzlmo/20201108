import React, { useState } from 'react'
import History from '../components/search/history.js'
import SearchBar from '../components/search/search-bar.js'

function SearchPage() {
  const [keywords, setKeywords] = useState([
    {
      id: Date.now(),
      text: '아이유',
    },
  ])
  return (
    <div>
      <SearchBar></SearchBar>
      <History keywords={keywords} />
    </div>
  )
}

export default SearchPage
