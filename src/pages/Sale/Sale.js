import React, { useEffect } from "react";
import PageTemplate from "../../components/page-template";
import { getHouses } from "../../store/houses/fetchs";
import { connect } from "react-redux";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination";

function Sale({ getHouses, houses, loading, page }) {
  useEffect(() => {
    getHouses({ page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = (newPage) => {
    getHouses({ page: newPage });
  };

  return (
    <PageTemplate>
      <div className="px-5 pt-3 pb-3">
        <h3>
          <strong>Элитная недвижимость в подмосковье</strong>
        </h3>
        {houses.length ? (
          <Pagination onClick={nextPage} currPage={page}></Pagination>
        ) : (
          ""
        )}
        {loading ? (
          <div className="progress" style={{ margin: "10%" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
        ) : (
          <div className="d-flex justify-content-between px-3 flex-wrap items-list">
            {houses.length
              ? houses.map((item) => <Card key={item.id} item={item}></Card>)
              : "Нет объектов"}
              <div className='placeholder-card mx-2'></div>
              <div className='placeholder-card mx-2'></div>
              <div className='placeholder-card mx-2'></div>
              <div className='placeholder-card mx-2'></div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}

const mapStateToProps = (state) => {
  return {
    houses: state.getHousesReducer.houses,
    page: state.getHousesReducer.page,
    loading: state.getHousesReducer.loading,
    total: state.getHousesReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHouses: ({ page }) => dispatch(getHouses({ page })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
