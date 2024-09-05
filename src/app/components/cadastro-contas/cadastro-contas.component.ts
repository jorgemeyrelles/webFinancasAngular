import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cadastro-contas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastro-contas.component.html',
  styleUrl: './cadastro-contas.component.css',
})
export class CadastroContasComponent {
  categorias: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(`${environment.apiFinancas}/api/categorias`).subscribe({
      next: (data) => {
        console.log(data);
        this.categorias = data as any[];
      },
    });
  }
}
