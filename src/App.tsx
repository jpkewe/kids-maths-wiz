import { Button } from './components/ui/button'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-background">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Kids Maths Wiz</h1>
          <p className="mt-3 text-xl text-muted-foreground">
            A fun way for children to learn basic arithmetic
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Button className="w-full text-lg py-6" variant="default">
            ➕ Addition
          </Button>
          <Button className="w-full text-lg py-6" variant="outline">
            ➖ Subtraction
          </Button>
          <Button className="w-full text-lg py-6" variant="secondary">
            ✖️ Multiplication
          </Button>
          <Button className="w-full text-lg py-6" variant="destructive">
            ➗ Division
          </Button>
          <Button className="w-full text-lg py-6" variant="ghost">
            🔀 Random Mode
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
