function Affichage_Parenthesage_Optimal(s,i,j)
% AFFICHE-PARENTH�SAGE-OPTIMAL(s, 1, n) affiche un parenth�sage optimal de
% <A1, A2, . . . , An>
% page 330 
if i==j
    fprintf('A%d \n',i);
else
    fprintf('(%d',Affichage_Parenthesage_Optimal(s,i,s(i,j)));
    fprintf('%d)',Affichage_Parenthesage_Optimal(s,s(i,j)+1,j));
end

end

