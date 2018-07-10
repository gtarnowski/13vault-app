import React from 'react'
import range from 'lodash/range'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'

import './index.css'

class Paginator extends React.Component {
  onPageChange = e => {
    e.preventDefault()
    this.props.onPageChange(e.currentTarget.dataset.page)
  }

  render () {
    const { page, pages } = this.props

    if (pages < 2) {
      return null
    }

    let pageRanges = [
      { from: 1, to: pages + 1 }
    ]

    if (pages >= 6) {
      if (page < 5) {
        pageRanges = [
          { from: 1, to: page + 2 },
          { from: pages - 1, to: pages }
        ]
      }

      if (page >= 5) {
        pageRanges = [
          { from: 1, to: 2 },
          { from: page - 1, to: page >= pages - 3 ? pages + 1 : page + 2 }
        ]

        if (pages > page + 3) {
          pageRanges.push({ from: pages, to: pages + 1 })
        }
      }
    }

    const ranges = []
    let index = 0
    pageRanges.map(pageRange => range(pageRange.from, pageRange.to).map(num => (
      <li key={num}>
        <a
          className="shadowed"
          data-active={num === page}
          data-page={num}
          onClick={this.onPageChange}
        >
          {num}
        </a>
      </li>
    ))).map(range => {
      ranges.push(range)
      ranges.push(<li key={`...${index++}`}><a className="separator" href="#..." onClick={e => e.preventDefault()}>...</a></li>)

      return range
    })

    ranges.pop()

    return (
      <ul className="Paginator">
        <button key="prev" onClick={this.onPageChange} data-page={(page - 1)} data-arrow-show={page > 1}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        {ranges}
        <button key="next" onClick={this.onPageChange} data-page={(page + 1)} data-arrow-show={page < pages}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </ul>
    )
  }
}

export default Paginator
