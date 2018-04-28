/* Stateful Component */
import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  margin-bottom: 3em !important;
`

const Card = styled.div`
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 1em;
  display: flex;
`

const Image = styled.img.attrs({
  className: 'img-fluid'
})`
  max-height: 40px;
`

const Content = styled.div`
  border-left: thin solid black;
  ${'' /* margin: 1em 0; */}
`

const BottomBar = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  background: whitesmoke;
  padding: 0 1em;
  left: 0;
`

class DemoComponent extends React.Component {
  state = {
    list: [
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
    ]
  }

  componentDidMount = () => {
    this.setState({
      list: [...this.state.list, ...this.state.list, ...this.state.list, ...this.state.list]
    })
  }

  componentWillUnmount = () => {}

  render() {
    return (
      <div className="position-relative table-responsive">
        <Table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Location</th>
              <th className="text-center" scope="col">Type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, i) =>
              <tr>
                <th scope="row">{i+1}</th>
                <td>
                  <Image src={item.src} alt=""/>
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                <td className="text-center">{item.type}</td>
                <td>{item.status}</td>
              </tr>
            )}
          </tbody>
        </Table>
        <BottomBar>
          <div className="float-right">
            <div className="d-flex justify-content-center align-items-center">
              <nav className="pt-3 pr-4" aria-label="Page navigationexample">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
              <button className="btn btn-primary">
                Add Item
              </button>

            </div>

          </div>
        </BottomBar>
      </div>
    )
  }
}

export default DemoComponent
