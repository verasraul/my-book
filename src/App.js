import './App.css';
import Book from './components/Book';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />

        <Book title="Psycho"  
              image="https://s26162.pcdn.co/wp-content/uploads/2021/10/lf-1.jpg"
              description="Suscipit signiferumque mel ad, et qui dicant primis, iuvaret conceptam ad quo. 
              Ex has augue fabellas, est ex tritani constituto ullamcorper, vix no augue persecuti scriptorem. 
              Ei quo populo virtute detraxit. Enim tempor eruditi ei eum, dignissim conceptam ex pro, exerci legere ea pri. 
              Vero officiis no eam, tollit saperet vim ei, his duis postulant mediocritatem te."
              />
        
        <Book title="Catch-22"
              image = "https://s26162.pcdn.co/wp-content/uploads/2021/10/4cc4b6-20150304-catch22.jpg" 
              description = "Suscipit signiferumque mel ad, et qui dicant primis, iuvaret conceptam ad quo. 
              Ex has augue fabellas, est ex tritani constituto ullamcorper, vix no augue persecuti scriptorem. 
              Ei quo populo virtute detraxit. Enim tempor eruditi ei eum, dignissim conceptam ex pro, exerci legere ea pri. 
              Vero officiis no eam, tollit saperet vim ei, his duis postulant mediocritatem te." 
              />

        <Footer />
    </div>
  );
}

export default App;
